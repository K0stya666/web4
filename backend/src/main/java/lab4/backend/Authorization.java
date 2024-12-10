package lab4.backend;

import at.favre.lib.crypto.bcrypt.BCrypt;
import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import lab4.backend.entities.Point;
import lab4.backend.entities.User;
import lab4.backend.utils.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@SessionScoped
public class Authorization implements Serializable {

    private static final Logger logger = LoggerFactory.getLogger(Authorization.class);

    @Serial
    private static final long serialVersionUID = 1L;

    @Inject
    private JwtUtil jwtUtil;

    @Inject
    private DatabaseManager db;

//    private List<Point> points = new ArrayList<>();


//    @POST
//    @Path("/register")
//    public Response register(User user) {
//        if (isUsernameTaken(user.getUsername())) {
//            return Response.status(Response.Status.CONFLICT)
//                    .entity("Username already taken")
//                    .build();
//        }
//
////        List<Point> points = db.getPoints(user);
////        DatabaseManager.setUser(user);
////        points = db.getPoints(user);
//
//        String passwordHash = hashPassword(user.getPassword());
//        user.setPasswordHash(passwordHash);
//        String token = jwtUtil.generateToken(user.getUsername());
//        db.addUser(user);
//        logger.info("Пользователю {} выдан token: {}", user.getUsername(), token);
//        return Response.ok()
//                .entity("{\"token\":\"" + token + "\"}")
//                .build();
//    }

    @POST
    @Path("/password")
    public String getPassword(User user) {
        var u = db.findUserByUsername(user.getUsername());
        return u.getPassword();
    }

//    @POST
//    @Path("/login")
//    public Response login(User user) {
//        var u = db.findUserByUsername(user.getUsername());
//        if (u == null) {
//            return Response.status(Response.Status.UNAUTHORIZED)
//                    .entity("Username not found")
//                    .build();
//        }
//
////        db.setUser(user);
////        db.setUsername(user.getUsername());
////        points = db.getPoints(user);
//
//        String token = jwtUtil.generateToken(user.getUsername());
//        return Response.ok()
//                .entity("{\"token\":\"" + token + "\"}")
//                .build();
//    }




    private boolean isUsernameTaken(String username) {
        return db.findUserByUsername(username) != null;
    }

    private String hashPassword(String password) {
        return BCrypt.withDefaults().hashToString(12, password.toCharArray());
    }

    private boolean verifyPassword(String password, String hash) {
        BCrypt.Result res = BCrypt.verifyer().verify(password.toCharArray(), hash);
        return res.verified;
    }


















    @POST
    @Path("/login")
    public Response login(User user) {
        var storedUser = db.findUserByUsername(user.getUsername());
        if (storedUser == null) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("{\"error\":\"User not found\"}")
                    .build();
        }

        if (!verifyPassword(user.getPassword(), storedUser.getPasswordHash())) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("{\"error\":\"Incorrect password\"}")
                    .build();
        }

        String token = jwtUtil.generateToken(user.getUsername());
        return Response.ok()
                .entity("{\"token\":\"" + token + "\"}")
                .build();
    }

    @POST
    @Path("/register")
    public Response register(User user) {
        if (isUsernameTaken(user.getUsername())) {
            return Response.status(Response.Status.CONFLICT)
                    .entity("{\"error\":\"Username already taken\"}")
                    .build();
        }

        String passwordHash = hashPassword(user.getPassword());
        user.setPasswordHash(passwordHash);
        String token = jwtUtil.generateToken(user.getUsername());
        db.addUser(user);
        logger.info("Пользователю {} выдан token: {}", user.getUsername(), token);
        return Response.ok()
                .entity("{\"token\":\"" + token + "\"}")
                .build();
    }
}
















