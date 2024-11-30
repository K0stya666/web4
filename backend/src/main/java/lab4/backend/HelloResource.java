package lab4.backend;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Path("/hello-world")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class HelloResource {

    private static final Logger logger = LoggerFactory.getLogger(HelloResource.class.getName());

    @POST
//    @Consumes("application/json")
//    @Produces("text/plain")
    public String hello(DataDTO data) {
        logger.info("Получены данные: x=" + data.getX() + ", y=" + data.getY() + ", r=" + data.getR());
        return "Данные получены и залогированы.";
    }
}