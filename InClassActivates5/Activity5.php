<!DOCTYPE html>
<html>

<head>
    <title>Currency Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="Activity5.php" method="post">
        <label for="from">From:</label>
        <input type="number" id="from" name="from" value="0" min="0">

        <label for="currency">Currency:</label>
        <select id=first_currency name="first_currency">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select> <br>

        <?php
        $conversion_rates = array(
            'USD' => array(
                'USD' => 1,
                'CAD' => 1.35,
                'EUR' => 0.92,
            ),
            'CAD' => array(
                'CAD' => 1,
                'USD' => 0.74,
                'EUR' => 0.68,
            ),
            'EUR' => array(
                'EUR' => 1,
                'USD' => 1.18,
                'CAD' => 1.47,
            ),
        );
        if ($_POST) {
            $from = $_POST['from'];
            $from_currency = $_POST['first_currency'];
            $to_currency = $_POST['second_currency'];
            $conversion_rate = $conversion_rates[$from_currency][$to_currency];
            $result = $from * $conversion_rate;
        }
        ?>
        <label for="to">To:</label>
        <input type="number" id="to" name="to" value="<?php echo isset($result) ? $result : '0'; ?>" readonly>

        <label for="currency">Currency:</label>
        <select id=second_currency name="second_currency">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select> <br>

        <input id="convertbtn" type="submit" value="convert">
    </form>
</body>

</html>