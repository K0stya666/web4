package lab4.backend;

import at.favre.lib.crypto.bcrypt.BCrypt;
import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import lab4.backend.entities.User;
import lab4.backend.utils.JwtUtil;

import java.io.Serial;
import java.io.Serializable;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@SessionScoped
public class Authorization implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Inject
    private JwtUtil jwtUtil;

    @Inject
    private DatabaseManager db;

    @POST
    @Path("/register")
    public Response register(User user) {
        if (isUsernameTaken(user.getUsername())) {
            return Response.status(Response.Status.CONFLICT)
                    .entity("Username already taken")
                    .build();
        }

        String passwordHash = hashPassword(user.getPassword());
        user.setPasswordHash(passwordHash);
        db.addUser(user);
        return Response.status(Response.Status.CREATED).build();
    }

    @POST
    @Path("/login")
    public Response login(User user) {
        var u = db.findUserByUsername(user.getUsername());
        if (u == null) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Username not found")
                    .build();
        }

        String token = jwtUtil.generateToken(user.getUsername());
        return Response.ok()
                .entity("{\"token\":\"" + token + "\"}")
                .build();
    }




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
}
