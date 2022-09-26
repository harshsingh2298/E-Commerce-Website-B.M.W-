package Harsh.Singh.CustomerService.Domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Customer {
    @Id
    private String customerName;
    private long phoneNo;
    private String address;
}
