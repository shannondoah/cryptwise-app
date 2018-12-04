# Cryptwise App

This is the centralized gateway to the Cryptwise smart contract project. The app itself is a Splitwise clone that integrates with the ethereum network to enable users to settle their debts with peer to peer Ether payments via an escrow contract.

### Config

In order to get the app up and running, it needs to be able to interact with the contracts. Currently, they have only been deployed locally. As such, to run them yourself, you would need to do the same via the [Cryptwise truffle project](https://github.com/shannondoah/cryptwise), register the main contract, and then tweak the `smart_contracts.rb` initializer with the appropriate client network and truffle artifacts. This sets the main Cryptwise contract app-wide for performing server-side read functions and exposes the address to the client side for executing transactions.

Using the `ethereum.rb` gem, it (theoretically) would have been possible to build and deploy my contracts from within this application, but for the ease familiarity of leveraging open zeppelin contracts and the testing suite, I kept the two parts separate.

### Required Packages

Rails 5.2

Ruby 2.3.3

`bundle install`

`rails db:migrate`

`rails server`

**OPTIONAL**

`rails db:seed` to seed some test data into the database

## Using the app

Anyone can use the app, with or without a digital wallet. The intention is for Ether payments to be a value added that encourage laymen to explore the option of creating and registering a digital wallet, with the added benefit that their crypto-familiar peers can settle their debts and seed some digital currency into their wallets.

Simply sign up, add friends, and start recording payments!

### Current limitations

There are obviously many limitations of this grossly simplified application (not taking into account the limitations based on the fact that this is not live). Some of the most obvious:

* Friends must already be signed up with the app in order to record expenses or payments
* Expenses can currently only be recorded in CAD
* CAD to ETH conversion is hardcoded to the conversion rate specified by Google on Dec 2nd, 2018
* Expenses can only be split equally between participants
* No sorting/searching/pagination
* Database design not very query/aggregate-friendly - would start over completely given more time
* No groups (ex: Vacation groups) or debt simplification (ex: Alice owes Bob $20, and Bob owes Eve $20, therefore Alice owes Eve $20)

Support for multiple currencies and live conversion rates would add significant value.
