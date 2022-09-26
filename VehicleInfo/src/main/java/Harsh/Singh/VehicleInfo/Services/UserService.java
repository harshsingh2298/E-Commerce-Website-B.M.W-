package Harsh.Singh.VehicleInfo.Services;

import Harsh.Singh.VehicleInfo.Domain.User;
import Harsh.Singh.VehicleInfo.Domain.UserDTO;
import Harsh.Singh.VehicleInfo.Domain.Vehicle;

public interface UserService {
    User addCart(UserDTO userdto);
    public User findUserList(String userName);
}
