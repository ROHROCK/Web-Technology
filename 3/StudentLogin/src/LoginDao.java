import java.sql.*;

public class LoginDao {

	public boolean validation(LoginClass loginObject)throws ClassNotFoundException {
		//set up the JDBC connection
		Class.forName("com.mysql.jdbc.Driver");
		boolean status = false;
		try {
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/db1","root","root");
			PreparedStatement prep = conn.prepareStatement("SELECT * FROM login WHERE USERNAME = ? AND PASSWORD = ?");
			prep.setString(1, loginObject.getUsername());
			prep.setString(2, loginObject.getPassword());
			ResultSet res = prep.executeQuery();
			status = res.next();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.err.println("SQLstate: "+e.getSQLState());
			System.err.println("Error Code: "+e.getErrorCode());
			System.err.println("Message: "+e.getMessage());
		}
		return status;
	}
}
