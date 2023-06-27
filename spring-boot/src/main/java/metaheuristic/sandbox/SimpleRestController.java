package metaheuristic.sandbox;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Sergio Lissner
 * Date: 6/24/2023
 * Time: 12:13 AM
 */
@RestController
@RequestMapping("/rest/v1/sandbox")
@RequiredArgsConstructor
@Slf4j
public class SimpleRestController {

    @Value("${spring.profiles.active:#{null}}")
    private String activeProfiles;

    public static final SandboxData.SimpleList SIMPLE_LIST;

    public static final String INFO_MESSAGE = "This is a simple list";

    static {
        SIMPLE_LIST = new SandboxData.SimpleList(
                List.of(
                        new SandboxData.SimpleItem(1, "Item #1"),
                        new SandboxData.SimpleItem(2, "Item #2"),
                        new SandboxData.SimpleItem(3, "Item #3"),
                        new SandboxData.SimpleItem(4, "Item #4"),
                        new SandboxData.SimpleItem(5, "Item #5")
                )
        );
        SIMPLE_LIST.addInfoMessage(INFO_MESSAGE);
    }

    @GetMapping("/list")
    public SandboxData.SimpleList list() {
        final String s = "metaheuristic.sandbox.SimpleRestController.list() was called, profiles: [" + activeProfiles+"]";
        log.warn(s);
        System.out.println(s);
        return SIMPLE_LIST;
    }
}
