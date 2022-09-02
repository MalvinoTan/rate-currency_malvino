/** Styles */
import styles from "./style.module.css";

const Table = ({ headers, datas }) => {
    return (
        <table className={styles.container}>
            <tr>
                {
                    headers.map((header, headerIdx) => {
                        return <th key={headerIdx}>{header}</th>
                    })
                }
            </tr>
            {
                Object.keys(datas).map((key, keyIdx) => {
                    return (
                        <tr key={keyIdx}>
                            <td>{key}</td>
                            <td>{(1.05 * datas[key]).toFixed(4)}</td>
                            <td>{(1.0 * datas[key]).toFixed(4)}</td>
                            <td>{(0.95 * datas[key]).toFixed(4)}</td>
                        </tr>
                    )
                })
            }
        </table>
    ); 
};

export default Table;