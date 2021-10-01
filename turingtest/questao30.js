const user = {
    hello:'Welcome to Turing',
    sayWelcome() {
        console.log(this.hello);
    }

};
setTimeout(user.sayWelcome.bind(user),1000);