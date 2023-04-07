<!DOCTYPE html>
<html lang="en">

<head>
	<title>User Registration Form</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<h1>Registration Form</h1>
	<form action="Activity4-preview.php" method="POST">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name"><br>

		<label for="username">Username:</label>
		<input type="text" id="username" name="username"><br>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password"><br>

		<label for="address">Address:</label>
		<input type="text" id="address" name="address"></input><br>

		<label for="country">Country:</label>
		<select id="country" name="country">
			<option value="none">(Please select a country)</option>
			<option value="Turkey">Turkey</option>
			<option value="USA">USA</option>
			<option value="Canada">Canada</option>
			<option value="UK">UK</option>
		</select><br>

		<label for="zipcode">ZIP Code:</label>
		<input type="text" id="zipcode" name="zipcode"><br>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email"><br>
		<div class="container">
			<span for="sex">Sex:</span>
			<input type="radio" id="male" name="sex" value="male">
			<label for="male">Male</label>
			<input type="radio" id="female" name="sex" value="female">
			<label for="female">Female</label><br>

			<span for="language">Language:</span>
			<label for="English">English</label>
			<input type="checkbox" id="English" name="language[]" value="English">
			<label for="french">French</label>
			<input type="checkbox" id="French" name="language[]" value="French">
			<label for="german">German</label>
			<input type="checkbox" id="German" name="language[]" value="German"><br>
		</div>
		<span for="about">About:</span>
		<textarea id="about" name="about"></textarea> <br>
		<label></label>
		<input type="submit" id="sumbitbtn" value="submit">

	</form>
</body>

</html>