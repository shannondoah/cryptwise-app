window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    function callback(err, tx) {
        if (!err) {
            return tx;
        } else {
            console.log(err);
        }
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


    const registryContract = await getContract(CryptwiseApp.registryJson.abi, CryptwiseApp.registryAddress);

    // await registryContract.registerContract("0x42874bcbea7b97551e0bf71f9693775bd005f76b", {from: web3.eth.accounts[0]}, function(err, tx) {
    //     if (!err) {
    //         return tx;
    //     } else {
    //         console.log(err);
    //     }
    // });
    const cryptwiseAddress = await registryContract.registeredContract.call((err, resp) => {
        if (err != null) {
            console.log(_err);
        } else {
            console.log(resp);
        }
    });

    debugger
    const cryptwiseContract = await getContract(CryptwiseApp.cryptwiseJson.abi, "0x42874bcbea7b97551e0bf71f9693775bd005f76b");

    debugger
    const registryEvent = registryContract.allEvents({ fromBlock: 0, toBlock: 'latest' });

});


