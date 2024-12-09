package lab4.backend;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lab4.backend.entities.Point;
import lab4.backend.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ApplicationScoped
public class DatabaseManager {

    private final static Logger logger =  LoggerFactory.getLogger(DatabaseManager.class);
    private String username;

    private User user;

    @PersistenceContext(unitName = "StudsPU")
    private EntityManager em;


    @Transactional
    public void addUser(User user) {
        em.persist(user);
    }

    public User findUserByUsername(String username) {
        try {
            TypedQuery<User> query = em.createQuery("select u from User u where u.username = :username", User.class);
            query.setParameter("username", username);
            return query.getSingleResult();
        } catch (NoResultException e) {
            logger.warn("No user found with username {}", username);
        } catch (NonUniqueResultException e) {
            logger.warn("Non-unique user found with username {}", username);
        }
        return null;
    }

    @Transactional
    public void addPoint(Point point) {
        try {
            em.persist(point);
            logger.info("sex point shas will be added");
        } catch (Exception e) {
            logger.error("Point doesn't add: {}", e.getMessage());
            throw e;
        }
    }

    public List<Point> getPoints(User user) {
        return em.createQuery("select p from Point p where p.user = :user", Point.class)
                .setParameter("user", user).getResultList();
    }

    public List<Point> getPoints() {
        return em.createQuery("select p from Point p", Point.class)
                .getResultList();
    }

    @Transactional
    public void clearTable(){
        em.createQuery("delete from Point").executeUpdate();
    }
}
