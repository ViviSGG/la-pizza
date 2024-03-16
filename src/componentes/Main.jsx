import React, {useState} from "react"
import Cuma from "../assets/img-la-pizza/cuma.png"
import Banana from "../assets/img-la-pizza/banana.png"
import Menta from "../assets/img-la-pizza/menta.png"
import Toca from "../assets/img-la-pizza/toca.png"
import Prato from "../assets/img-la-pizza/prato.png"
import Carrinho from "../assets/img-la-pizza/carrinho.png"
import Fechar from "../assets/img-la-pizza/fechar.png"
import "./style.css"

function Main() {

    const [quantidade, setQuantidade] = useState(0);    
    const [pizzaCuma, setPizzaCuma] = useState(0);
    const [pizzaMenta, setPizzaMenta] = useState(0);
    const [pizzaBanana, setPizzaBanana] = useState(0);
    const [pizzaToca, setPizzaToca] = useState(0);
    const sabores = [];

    function somar() {
        setQuantidade(quantidade + 1)
    }

    function compra(valor) {
        if (valor == "Cuma") {
            setPizzaCuma(pizzaCuma + 1);
        } else if (valor == "Menta") {
            setPizzaMenta(pizzaMenta + 1);
        } else if (valor == "Bana") {
            setPizzaBanana(pizzaBanana + 1);
        } else if (valor == "Toca") {
            setPizzaToca(pizzaToca + 1);
        }
        console.log(pizzaCuma, pizzaMenta, pizzaBanana, pizzaToca);
    }

    function retirar(valor) {
        if (valor == "Cuma") {
            setPizzaCuma(pizzaCuma - 1);
        } else if (valor == "Menta") {
            setPizzaMenta(pizzaMenta - 1);
        } else if (valor == "Bana") {
            setPizzaBanana(pizzaBanana - 1);
        } else if (valor == "Toca") {
            setPizzaToca(pizzaToca - 1);
        }
        console.log(pizzaCuma, pizzaMenta, pizzaBanana, pizzaToca);
    }

    function visualizar() {
        if (pizzaCuma > 0) {
            sabores.push({sabor: "Cuma", quant: pizzaCuma, img: Cuma});
        }
        if (pizzaMenta > 0) {
            sabores.push({sabor: "Menta", quant: pizzaMenta, img: Menta});

        }
        if (pizzaBanana > 0 ){
            sabores.push({sabor: "Banana", quant: pizzaBanana, img: Banana});

        }
        if (pizzaToca > 0){
            sabores.push({sabor: "Toca", quant: pizzaToca, img: Toca});
        }
        console.log(sabores);    
    }

    return (
        <>
            <main>
                <section className="banner">
                    <h1>La P<span id="i-yellow">i</span><span id="z-red">z</span><span id="z-green">z</span>a</h1>
                </section>  
                <section className="box2">
                    <h2>Mais vendidas</h2>
                    <section className="content-card">
                        <div className="card">
                            <img className="img-card" src={Cuma} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Cuma</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {compra("Cuma"), somar()}}>Comprar agora</button>
                        </div>
                        <div className="card">
                            <img className="img-card" src={Menta} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Menta</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {compra("Menta"), somar()}}>Comprar agora</button>
                        </div>
                        <div className="card">
                            <img className="img-card" src={Banana} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Bana</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {compra("Bana"), somar()}}>Comprar agora</button>
                        </div>
                        <div className="card">
                            <img className="img-card" src={Toca} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Toca</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {compra("Toca"), somar()}}>Comprar agora</button>
                        </div>
                    </section>
                </section>
                <section className="box3">
                    <section className="content-box3">
                        <section className="mesas">
                            <img id="prato" src={Prato} alt="" />
                        </section>
                        <section className="descricao-restaurante">
                            <h2>La P<span id="i-yellow">i</span><span id="z-red">z</span><span id="z-green">z</span>a</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum.</p>
                            <button>Ler mais</button>
                        </section>
                    </section>
                </section>
                <section className="compras">
                    <div className="title">
                        <img id="carrinho" src={Carrinho} alt="" />
                        <p>Itens no carrinho ({quantidade})</p>
                    </div>
                    <section className="itens">
                        <div>
                            <h3>{pizzaCuma} {pizzaMenta} {pizzaBanana} {pizzaToca}</h3>
                            {/* <h4>{preco}</h4> */}
                        </div>
                        {/* <img src={pizzaImagem} alt="" /> */}
                    </section>
                    <button onClick={visualizar()}>Ver carrinho</button>
                </section>
                <section className="modal">
                    <section className="box-modal">
                        <section className="top-modal">
                            <div>
                                <h2>Carrinho</h2>
                                <h3>Itens:</h3>
                            </div>
                            <div>
                                <img width={32} src={Fechar} alt="" />
                            </div>
                        </section>
                        <section className="main-modal">
                            <section className="sub-box1">
                                {
                                    sabores.map((item) => (
                                        <>
                                            <figure>
                                                <img src={item.img} alt="" />
                                                <div className="sub-box1-div1">
                                                    <figcaption>{item.sabor}</figcaption>
                                                    <h4>{item.quant} unidade(s)</h4>
                                                </div>
                                                <div className="sub-box1-div2">
                                                    <button>-</button>
                                                    <button>+</button>
                                                </div>
                                            </figure>
                                    </> 
                                    )
                                )}
                            </section>
                            <section className="sub-box2">
                                <div>
                                    <label htmlFor="">Estado *</label>
                                    <input type="text" name="" id="" placeholder="Pernambuco" disabled />
                                </div>
                                <div>
                                    <label htmlFor="">Cidade *</label>
                                    <select name="" id="">
                                        <option value="">Recife</option>
                                        <option value="">Olinda</option>
                                        <option value="">Jaboatão</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Rua *</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">Número *</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">Bloco</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">Celular</label>
                                    <input type="tel" name="" id="" />
                                </div>
                                <section className="checkbox-whats">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">É o número do WhatsApp.</label>
                                </section>
                            </section>
                        </section>
                        <section className="footer-modal">
                            <div>
                                <h4>Total: R$</h4>
                                <h4>{quantidade * 23}</h4>
                            </div>
                            <button>Comprar</button>
                        </section>
                    </section>
                </section>
            </main>
        </>
    )
}
export default Main