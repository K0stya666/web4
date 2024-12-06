package lab4.backend;

import jakarta.ejb.Stateless;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lab4.backend.entities.Point;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serial;
import java.io.Serializable;

@NoArgsConstructor
@ApplicationScoped
//@Stateless
public class DatabaseManager {

//    @Serial
//    private static final long serialVersionUID = 1L;
    private final static Logger logger =  LoggerFactory.getLogger(DatabaseManager.class);

    @PersistenceUnit(unitName = "primary")
    private EntityManagerFactory emf;



    public void addPoint(Point point) {

        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        try {
            tx.begin();
            System.out.println("sex point shas will be added" + point);
            em.persist(point);
            tx.commit();
        } catch (Exception e) {
            // Логирование ошибки
            logger.error("Point doesn't add: {}", e.getMessage());
            throw e;
        } finally {
            em.close();
        }
    }

//    public void addPoint(Point point){
//        EntityManager em = emf.createEntityManager();
//        EntityTransaction tx = em.getTransaction();
//        try (em) {
//            tx.begin();
//            em.persist(point);
//            tx.commit();
//        } catch (Exception e) {
//            if (tx.isActive()) tx.rollback();
//            throw e;
//        }
//    }


//    public void addPoint(Point point){
//        try (Session session = sessionFactory.openSession()) {
//            session.beginTransaction();
//            session.persist(point);
//            session.getTransaction().commit();
//        }
//    }

//    @PreDestroy
//    public void close() {
//        emf.close();
////        sessionFactory.close();
//    }

//    public List<Point> getPoints() {
//        return em.createQuery("select p from Point p", Point.class).getResultList();
//    }
//
//    @Transactional
//    public void clearTable(){
//        em.createQuery("delete from Point").executeUpdate();
//    }
}
