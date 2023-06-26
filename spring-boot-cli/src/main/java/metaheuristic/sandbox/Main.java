package metaheuristic.sandbox;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Profile;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author Sergio Lissner
 * Date: 6/24/2023
 * Time: 12:03 AM
 */
@SpringBootApplication
@Slf4j
@RequiredArgsConstructor
public class Main implements CommandLineRunner {

    private final ApplicationContext appCtx;

    public static void main(String[] args) {
        System.out.println("metaheuristic.sandbox.Main was launched");
        SpringApplication.run(Main.class, args);
    }

    @Override
    public void run(String[] args) {
        System.out.println("metaheuristic.sandbox.Main.run() was invoked");
        try {
            Thread.sleep(5_000);
        }
        catch (InterruptedException e) {
            //
        }
        System.exit(SpringApplication.exit(appCtx, ()->0));
    }
}

