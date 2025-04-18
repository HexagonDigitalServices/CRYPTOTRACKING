    const handleCurrencySelect = (selectedCurrency) => {
        switch (selectedCurrency) {
            case "usd":
                setCurrentCurrency({ name: "usd", symbol: "$" });
                break;
            case "eur":
                setCurrentCurrency({ name: "eur", symbol: "€" });
                break;
            case "inr":
                setCurrentCurrency({ name: "inr", symbol: "₹" })
                break;
            default:
                setCurrentCurrency({ name: "usd", symbol: "$" })
        }
        setIsCurrencyDropdownOpen(false);
    }  


https://api.coingecko.com/api/v3/coins/

{item.price_change_percentage_24h > 0 ? '▲' : '▼'}  
