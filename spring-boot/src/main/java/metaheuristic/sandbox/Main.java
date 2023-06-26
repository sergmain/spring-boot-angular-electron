package metaheuristic.sandbox;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Sergio Lissner
 * Date: 6/24/2023
 * Time: 12:03 AM
 */
@SpringBootApplication
@Slf4j
public class Main {

    public static void main(String[] args) {
        System.out.println("metaheuristic.sandbox.Main was launched");
        SpringApplication.run(Main.class, args);
    }
}