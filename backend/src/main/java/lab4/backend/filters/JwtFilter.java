package lab4.backend.filters;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import jakarta.annotation.Priority;
import jakarta.inject.Inject;
import jakarta.ws.rs.Priorities;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import lab4.backend.utils.JwtUtil;

@Provider
@Priority(Priorities.AUTHENTICATION)
public class JwtFilter implements ContainerRequestFilter {

    @Inject
    private JwtUtil jwtUtil;

    @Override
    public void filter(ContainerRequestContext requestContext) {
        String path = requestContext.getUriInfo().getPath();
        if (path.endsWith("/auth/register") || path.endsWith("/auth/login")) return;

        String authHeader = requestContext.getHeaderString("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            requestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED)
                            .entity("Missing or invalid Authorization header")
                            .build()
            );
//            return;
        }

//        String token = authHeader.substring("Bearer ".length()).trim();

//        try {
//            String username = jwtUtil.validateToken(token);
//        } catch (JwtException e) {
//            requestContext.abortWith(
//                    Response.status(Response.Status.UNAUTHORIZED)
//                            .entity("Invalid or expired token")
//                            .build()
//            );
//        }
    }
}
