package lab4.backend.utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.enterprise.context.ApplicationScoped;
import lombok.Getter;
import java.security.Key;
import java.util.Date;

@Getter
@ApplicationScoped
public class JwtUtil {
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);


    public String generateToken(String username) {
        long nowTime = System.currentTimeMillis();
        long expTime = nowTime + 3600000;

        Date nowDate = new Date(nowTime);
        Date expDate = new Date(expTime);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(nowDate)
                .setExpiration(expDate)
                .signWith(key)
                .compact();
    }

    public String validateToken(String token) throws JwtException {
        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token);
        return claims.getBody().getSubject();
    }
}
