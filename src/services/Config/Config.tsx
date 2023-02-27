var config = window.location.href.includes("localhost") ? {
    Api: "http://localhost:5151/"
} : {
    Api: "https://merchapi.codedghost.com/"
}

export default config;