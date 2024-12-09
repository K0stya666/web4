package lab4.backend;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.SecurityContext;
import lab4.backend.entities.Point;
import lab4.backend.entities.User;
import lab4.backend.utils.JwtUtil;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Path("/areaCheck")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RequestScoped
public class AreaCheck implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(AreaCheck.class.getName());
//    private List<Point> points;

    @Inject
    private DatabaseManager db;
    @Inject
    private JwtUtil jwtUtil;

//    @PostConstruct
//    public void init() {
//        if (points == null) { points = new ArrayList<>(); }
//        points = db.getPoints();
//    }


//    @GET
//    @Path("/points")
//    public List<Point> getPoints(@HeaderParam("Authorization") String authHeader) {
////        var username = getUsernameFromToken(authHeader);
////        var user = db.findUserByUsername(username);
////        points = db.getPoints(user);
//        return points;
//    }

    @GET
    @Path("/points")
    public Response getPoints(@HeaderParam("Authorization") String authHeader) {
        String username = getUsernameFromToken(authHeader);
        if (username == null) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Неверный или отсутствующий токен")
                    .build();
        }

        User user = db.findUserByUsername(username);
        if (user == null) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Пользователь не найден")
                    .build();
        }

        List<Point> points = db.getPoints(user);
        return Response.ok(points).build();
    }


    @POST
    @Path("/point")
    public Point addPoint(Point data, @HeaderParam("Authorization") String authHeader) {
        double x = data.getX();
        double y = data.getY();
        double r = data.getR();
        boolean hit = checkHit(x, y, r);
        LocalDateTime date = LocalDateTime.now();
        String strdate = date.toString();

        var username = getUsernameFromToken(authHeader);
        var user = db.findUserByUsername(username);

        var point = new Point(x, y, r, hit, strdate, user);
//        points.add(point);
        db.addPoint(point);

        logger.info("Получены данные: x={}, y={}, r={}, hit={}", data.getX(), data.getY(), data.getR(), hit);
        return point;
    }

    @DELETE
    @Path("/clear")
    public void clear(@HeaderParam("Authorization") String authHeader) {
        logger.info("Запрос на очистку точек получен.");
//        points.clear();
        var username = getUsernameFromToken(authHeader);
        var user = db.findUserByUsername(username);
        db.clearTable(user);
        logger.info("Коллекция точек успешно очищена.");
    }


    private boolean checkHit(double x, double y, double r) {
        // Первый квадрант: прямоугольник
        if (x >= 0 && y >= 0 && x <= r && y <= r) {
            return true;
        }
        // Второй квадрант: четверть круга
        if (x <= 0 && y >= 0 && x * x + y * y <= r * r) {
            return true;
        }
        // Четвертый квадрант: треугольник
        if (x >= 0 && y <= 0 && (-y <= (r - x) / 2)) {
            return true;
        }
        // Если не попадает ни в одну из областей
        return false;
    }


    private String getUsernameFromToken(String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) return null;
        String token = authHeader.substring("Bearer ".length()).trim();
        return jwtUtil.validateToken(token);
    }

//    private String getAuthHeader() {
//        return authHeader;
//    }
}