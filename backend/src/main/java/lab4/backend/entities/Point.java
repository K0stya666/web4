package lab4.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "points")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double x;
    private double y;
    private double r;
    private boolean hit;

    @Column(name = "hit_time")
    private String date;

    public Point(double x, double y, double r, boolean hit, String date) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.date = date;
    }
}
