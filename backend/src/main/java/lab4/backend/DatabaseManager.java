package lab4.backend;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lab4.backend.entities.Point;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@NoArgsConstructor
@ApplicationScoped
public class DatabaseManager {

    private final static Logger logger =  LoggerFactory.getLogger(DatabaseManager.class);

    @PersistenceContext(unitName = "StudsPU")
    private EntityManager em;


    @Transactional
    public void addUser() {

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

    public List<Point> getPoints() {
        return em.createQuery("select p from Point p", Point.class).getResultList();
    }

    @Transactional
    public void clearTable(){
        em.createQuery("delete from Point").executeUpdate();
    }
}
