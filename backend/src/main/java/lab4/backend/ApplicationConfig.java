package lab4.backend;

import com.fasterxml.jackson.core.util.JacksonFeature;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import lab4.backend.filters.CORSFilter;
import lab4.backend.filters.SPAFilter;

import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/api")
public class ApplicationConfig extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<>();
        classes.add(AreaCheck.class);
        classes.add(CORSFilter.class);
        classes.add(SPAFilter.class);
        classes.add(JacksonFeature.class); // Регистрация Jackson
        classes.add(Authorization.class);
        return classes;
    }
}