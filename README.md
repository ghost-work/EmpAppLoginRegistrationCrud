

            **********     ===   Asp.net core mvc (role based crud operation) (using scaffolded)  ===  ********
						   
*****  Admin-Login  **  Admin-Registration ** view all registered Employee ** crud opeartion on Employee Deatils only by Admin Role Personal   ***********


1. createing asp.net core mvc project 
		- name - "EmployeeApliication"

2. installing all required packages -
		1-Microsoft.EntityFrameworkCore  - to use entity framework for data mapping 
		2-Microsoft.EntityFrameworkCore.SqlServer  - to connect sql database server with application
		3-Microsoft.EntityFrameworkCore.Tool  - to use migration for creating tables in database

		
3. creating database 
		- open sql server - create databse name "EmployeeDB"

4. writing  connection string in AppSettings.json
		-	{
				"ConnectionStrings": {
					"ConnectDB": "server=GHOST;database=EmployeeApplicationDB;Integrated Security=true;TrustServerCertificate=True"
			},

5. creating model for employee entity and define some properties -
		- properties like Id, name, email, phone, workLocation, Department
		- eg. - public int Id { get; set; } - add all other properties like this
		
6. creating new DbContext class
		- adding new folder name "Data"
		- creating new class "ApplicationDbContext.cs" in "Data" folder
		- create constructor with DbContextOptions for that class 
				- public ApplicationDbContext(DbContextOptions options) : base(options)
				{}
		- define data set for Employee class model
				-  public DbSet<Employee> Employees { get; set; }
				
7. connection string class injection in ApplicationDbContext class 
		- it will create connection sql server database and talking with Employee table in database 
		- writing this dependency injjection in "Program.cs"
				- builder.Services.AddDbContext<ApplicationDbContext>(
					options =>
					{
						options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectDB"));
					});
					
8. creating tables in database using migration
		- open package manager console and write 
				- add-migration "initialDatabaseSetup"
				- update-database
				
9. 
