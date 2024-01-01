import { useState } from "react"

function Tictaccom() {

    const [value, setvalue] = useState(['', '', '', '', '', '', '', '', '']);
    const [ran, setran] = useState('');

    const [won, setwon] = useState('');
    const [cun, setcun] = useState(0);


    const a1 = (a) => {
        // setran(Math.floor(Math.random() * 10))
        if (won == '' && value[a] == '') {
            value[a]='X';
            setvalue([...value]);
            setcun(cun+1);
        }
        random();

            win(0, 1, 2, 'X')
            win(0, 4, 8, 'X')
            win(0, 3, 6, 'X')
            win(1, 4, 7, 'X')
            win(2, 4, 6, 'X')
            win(2, 5, 8, 'X')
            win(3, 4, 5, 'X')
            win(6, 7, 8, 'X')

            win(0, 1, 2, '0')
            win(0, 4, 8, '0')
            win(0, 3, 6, '0')
            win(1, 4, 7, '0')
            win(2, 4, 6, '0')
            win(2, 5, 8, '0')
            win(3, 4, 5, '0')
            win(6, 7, 8, '0')
    }

    const random = () =>{
        if(cun<4){
            while(true){
            let ran =(Math.floor(Math.random() * 9));
         if(value[ran]==''){
            value[ran]='0';
            setvalue([...value])
            break;
            }
         }
        }
    }

    const win = (b1, b2, b3, s) => {
        if (value[b1] === s && value[b2] === s && value[b3] === s) {
            setwon("YOU WON")
        }
    }

    return (
        <>
            <div className="tic-grid">
                <input type="button" value={value[0]} onClick={() => a1(0)} />
                <input type="button" value={value[1]} onClick={() => a1(1)} />
                <input type="button" value={value[2]} onClick={() => a1(2)} />
                <input type="button" value={value[3]} onClick={() => a1(3)} />
                <input type="button" value={value[4]} onClick={() => a1(4)} />
                <input type="button" value={value[5]} onClick={() => a1(5)} />
                <input type="button" value={value[6]} onClick={() => a1(6)} />
                <input type="button" value={value[7]} onClick={() => a1(7)} />
                <input type="button" value={value[8]} onClick={() => a1(8)} />
            </div>

            <h1>{won}</h1>
        </>
    )
}

export default Tictaccom;
