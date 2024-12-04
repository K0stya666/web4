package lab4.backend;

import jakarta.annotation.PreDestroy;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import lab4.backend.entities.Point;
import lombok.NoArgsConstructor;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@ApplicationScoped
@NoArgsConstructor
public class DatabaseManager implements Serializable {

    @PersistenceContext(unitName = "primary")
    private EntityManager em;

    @Transactional
    public void addPoint(Point point){
        em.persist(point);
    }

    public List<Point> getPoints() {
        return em.createQuery("select p from Point p", Point.class).getResultList();
    }

    @Transactional
    public void clearTable(){
        em.createQuery("delete from Point").executeUpdate();
    }
}
