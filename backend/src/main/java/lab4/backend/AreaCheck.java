package lab4.backend;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import lab4.backend.entities.Point;
import lab4.backend.entities.User;
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
@SessionScoped
public class AreaCheck implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(AreaCheck.class.getName());
    private List<Point> points;
    private List<User> users;

    @Inject
    private DatabaseManager db;

    @PostConstruct
    public void init() {
        if (points == null) points = new ArrayList<>();
        if (users == null) users = new ArrayList<>();
        points = db.getPoints();
    }



    @POST
    @Path("/users")
    public User addUser(User data) {
        String username = data.getUsername();
        String password = data.getPassword();

        var user = new User(username, password);
        db.addUser(user);
        return user;
    }

    @POST
    @Path("/points")
    public Point addPoint(Point data) {
        double x = data.getX();
        double y = data.getY();
        double r = data.getR();
//        String username = data.getUsername();
        boolean hit = checkHit(x, y, r);
        LocalDateTime date = LocalDateTime.now();
        String strdate = date.toString();

        var point = new Point(x, y, r, hit, strdate);
        points.add(point);
        db.addPoint(point);

        logger.info("Получены данные: x={}, y={}, r={}, hit={}", data.getX(), data.getY(), data.getR(), hit);
        return point;
    }

    @DELETE
    @Path("/clear")
    public void clear() {
        logger.info("Запрос на очистку точек получен.");
        points.clear();
        db.clearTable();
        logger.info("Коллекция точек успешно очищена.");
    }

    private boolean checkHit(double x, double y, double r) {
        return true;
    }
}