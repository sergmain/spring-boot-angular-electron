package metaheuristic.sandbox;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author Sergio Lissner
 * Date: 6/24/2023
 * Time: 12:14 AM
 */
public class SandboxData {

    public record SimpleItem(int id, String name) {}

    @Data
    @EqualsAndHashCode(callSuper = false)
    @NoArgsConstructor
    public static class SimpleList extends BaseDataClass {
        public List<SimpleItem> items;

        public SimpleList(List<SimpleItem> items) {
            this.items = items;
        }
    }

}
