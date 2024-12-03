package lab4.backend;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.SessionScoped;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import lab4.backend.entities.Point;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SessionScoped
@Path("/areaCheck")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AreaCheck implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(AreaCheck.class.getName());
    private List<Point> points;

    @PostConstruct
    public void init() {
        if (points == null) { points = new ArrayList<>(); }
    }

    @POST
    public Point addPoints(Point data) {
        double x = data.getX();
        double y = data.getY();
        double r = data.getR();
        boolean hit = checkHit(x, y, r);
        LocalDateTime date = LocalDateTime.now();
        String strdate = date.toString();

        var point = new Point(x, y, r, hit, strdate);
        points.add(point);

        logger.info("Получены данные: x={}, y={}, r={}, hit={}", data.getX(), data.getY(), data.getR(), hit);
        return point;
    }

    @GET
    public List<Point> getPoints() {
        for (var point : points) {
            logger.info(point.toString());
        }
        return points;
    }

    @DELETE
    @Path("/clear")
    public void clear() {
        logger.info("Запрос на очистку точек получен.");
        points.clear();
        logger.info("Коллекция точек успешно очищена.");
    }

    private boolean checkHit(double x, double y, double r) {
        return true;
    }
}