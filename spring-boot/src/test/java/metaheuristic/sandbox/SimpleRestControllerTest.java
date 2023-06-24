package metaheuristic.sandbox;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * @author Sergio Lissner
 * Date: 6/24/2023
 * Time: 1:43 AM
 */
public class SimpleRestControllerTest {

    @Test
    public void test_1() throws JsonProcessingException {

        String json = JsonUtils.getMapper().writeValueAsString(SimpleRestController.SIMPLE_LIST);
        System.out.println(json);

        assertTrue(json.contains(SimpleRestController.INFO_MESSAGE));
    }
}
