package lab4.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Point {

    private double x;
    private double y;
    private double r;
    private boolean hit;
    private LocalDateTime date;



}
