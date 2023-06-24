package metaheuristic.sandbox;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;
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
public class SimpleRestController {

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
    public SandboxData.SimpleList chats() {
        return SIMPLE_LIST;
    }
}
