package Harsh.Singh.VehicleInfo.Services;

import Harsh.Singh.VehicleInfo.Domain.User;
import Harsh.Singh.VehicleInfo.Domain.UserDTO;
import Harsh.Singh.VehicleInfo.Domain.Vehicle;
import Harsh.Singh.VehicleInfo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class UserServicesImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServicesImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User addCart(UserDTO userdto) {
        System.out.println(userdto);
        Optional<User> userlist = userRepository.findById(userdto.getUserName());
        if (userlist.isEmpty()) {

            User user = new User();
            user.setUserName(userdto.getUserName());
            List<String> vehicles = new ArrayList<>();
            vehicles.add(userdto.getVehicleName());
            user.setVehicleName(vehicles);
            System.out.println("3333333333333333333333333333"+user);
            return userRepository.save(user);
        } else {

            User user1 = userlist.get();

            List<String> vehicles = user1.getVehicleName();
            vehicles.add(userdto.getVehicleName());
            user1.setVehicleName(vehicles);
            System.out.println("77777777777777777777777777"+user1);
            return userRepository.save(user1);
        }
    }
    @Override
    public User findUserList(String userName) {
        Optional<User> playList = userRepository.findById(userName);

        return playList.get();
    }

}












