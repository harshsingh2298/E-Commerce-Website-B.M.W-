package Harsh.Singh.CustomerService.Service;

import Harsh.Singh.CustomerService.Domain.Customer;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtSecurityTokenImpl implements SecurityTokenGenrator {
    @Override
    public Map<String,String> generateToken(Customer user) {
        String jwtToken=null;
        jwtToken= Jwts.builder().setSubject(user.getCustomerName())
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"secretkey")
                .compact();
        Map<String,String> map= new HashMap<>();
        System.out.println(jwtToken);

        map.put("token",jwtToken);
        map.put("UserName",user.getCustomerName());
        map.put("message","User SuccessFully logged in");
        System.out.println(map);
        return map;
    }
}

