window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
        } catch (error) {
           console.log(error);
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    function callback(err, tx) {
        if (!err) {
            console.log(tx);
        } else {
            console.log(err);
        }
    }

    function toEth(val) {
        return val * CryptwiseApp.conversionRate;
    }

    const getContract = async (json, address, web3 = window.web3) => {
        const contract = web3.eth.contract(json);
        return await contract.at(address);
    }

    const watchEvents = (event) => {
        event.watch((err, res) => {
            if (err)
              console.log('Error:', err)
            else
              console.log('Hey! Listen:', res)
        });
    }

    const cryptwiseContract = await getContract(CryptwiseApp.cryptwiseJson.abi, CryptwiseApp.cryptwiseAddress);

    const cryptwiseEvent = cryptwiseContract.allEvents({ fromBlock: 0, toBlock: 'latest' });

    $(document).on("click", "#pay_button", (e) => {
        if (!document.getElementById("payee-address")) return;
        if (document.getElementById("expense_payment_kind").value !== "deposited") return;

        e.preventDefault();
        const form = $("#payments_form");
        const toAddr = $("#payee-address").data("address");
        let amount = form.find("#expense_amount").val();

        if (amount <= 0) {
            alert("Amount must be greater than 0");
            return;
        }

        amount = toEth(amount);
        amount = web3.toWei(amount, "ether");

        cryptwiseContract.deposit(toAddr, {value: amount}, (err, tx) => {
            if (!err) {
                $("#payments_form").submit();
            } else {
                console.log(err);
            }
        })
    });

    $("#withdraw").on("click", (e) => {
        e.preventDefault();

        cryptwiseContract.withdraw((err, tx) => {
            if (!err) {
                window.location.reload();
            } else {
                console.log(err);
            }
        })
    });
});


