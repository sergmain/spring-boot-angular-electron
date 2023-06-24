package metaheuristic.sandbox;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

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
    @AllArgsConstructor
    public static class SimpleList extends BaseDataClass {
        public List<SimpleItem> items;

        @JsonCreator
        public SimpleList(@JsonProperty("status") List<SimpleItem> items,
                                   @JsonProperty("errorMessages") @Nullable List<String> errorMessages,
                                   @JsonProperty("infoMessages") @Nullable List<String> infoMessages) {
            this.items = items;
            this.errorMessages = errorMessages;
            this.infoMessages = infoMessages;
        }
    }
}
