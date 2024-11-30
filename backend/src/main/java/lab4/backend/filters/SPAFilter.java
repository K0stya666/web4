package lab4.backend.filters;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.regex.Pattern;

@WebFilter("/*")
public class SPAFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(SPAFilter.class);
    private static final Pattern STATIC_RESOURCES = Pattern.compile(".*(\\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico|html|map))$");

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;

        try {
            String uri = req.getRequestURI();
            String contextPath = req.getContextPath();

            logger.debug("Processing request: URI = {}, ContextPath = {}", uri, contextPath);

            if (uri.startsWith(contextPath + "/api")) {
                logger.debug("API request detected: {}", uri);
                chain.doFilter(request, response);
                return;
            }

            if (STATIC_RESOURCES.matcher(uri).matches() || uri.equals(contextPath + "favicon.ico")) {
                logger.debug("Static resource request detected: {}", uri);
                addCachingHeaders(resp);
                chain.doFilter(request, response);
                return;
            }

            logger.debug("SPA route detected: {}, forwarding to /index.html", uri);
            req.getRequestDispatcher("/index.html").forward(request, response);
        } catch (Exception e) {
            logger.error("Error processing request in SPAFilter", e);
            resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Internal Server Error");
        }
    }

    private void addCachingHeaders(HttpServletResponse resp) {
        resp.setHeader("Cache-Control", "max-age=31536000, public");
        resp.setHeader("Pragma", "cache");
    }
}
