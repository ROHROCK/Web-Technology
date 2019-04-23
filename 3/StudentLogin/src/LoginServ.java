

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServ")
public class LoginServ extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private LoginDao loginDao;
	
	@Override
	public void init() throws ServletException {
		super.init();
		loginDao = new LoginDao();
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		LoginClass loginObject = new LoginClass();
		loginObject.setUsername(request.getParameter("username"));
		loginObject.setPassword(request.getParameter("password"));
		
		try {
			if(loginDao.validation(loginObject)) {
				response.sendRedirect("Welcome.jsp");
			}else {
				 out.println("<script type=\"text/javascript\">");
				 out.println("alert('User or password incorrect');");
				 out.println("location='login.jsp';");
				 out.println("</script>");
			}
				
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
}
