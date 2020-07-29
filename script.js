    const loginBtn = document.getElementById("login-enter");
    loginBtn.addEventListener("click", function() {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    })

    const depositAmount = document.getElementById("deposit-btn");
    depositAmount.addEventListener("click", function() {
        const inputDeposit = document.getElementById("input-deposit").value;
        const inputNumber = parseFloat(inputDeposit);

        const showDeposit = document.getElementById("show-input-deposit").innerText;
        const depositEntry = parseFloat(showDeposit);

        const showBalance = document.getElementById("show-main-balance").innerText;
        const mainBalance = parseFloat(showBalance);


        const totalDeposit = inputNumber + depositEntry;

        const totalMainBalance = mainBalance + inputNumber;

        document.getElementById("show-main-balance").innerText = totalMainBalance;
        document.getElementById("show-input-deposit").innerText = totalDeposit;


    })