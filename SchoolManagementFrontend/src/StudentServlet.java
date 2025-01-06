package SchoolManagementFrontend.src;
import java.util.Scanner;

public class StudentServlet{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Student Management System");
        System.out.println("Enter 1 to View Students");
        System.out.println("Enter 2 to Add a Student");

        int choice = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        if (choice == 1) {
            viewStudents();
        } else if (choice == 2) {
            System.out.print("Enter Student Name: ");
            String studentName = scanner.nextLine();

            System.out.print("Enter Student Age: ");
            int studentAge = scanner.nextInt();

            addStudent(studentName, studentAge);
        } else {
            System.out.println("Invalid choice!");
        }

        scanner.close();
    }

    private static void viewStudents() {
        System.out.println("Viewing students is not implemented yet.");
    }

    private static void addStudent(String name, int age) {
        System.out.println("Student Added Successfully!");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
