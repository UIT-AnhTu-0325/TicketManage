import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout"
import "../asset/css/rule.css"
import axios from "axios";
export const Rules = () => {
    const [rules, setRules] = useState({
        book: 0,
        cancel: 0,
        max: 0
    })
    const handleChange = e => {
        const { name, value } = e.target;
        setRules({
          ...rules,
          [name]: value
        });
      };
    useEffect(() => {
        axios.get(`http://localhost:2000/api/rule`)
            .then(function (response) { return response.data })
            .then(function (data) {
                const items = data;
                setRules({
                    book: items[0].book,
                    cancel: items[0].cancel,
                    max: items[0].max
                });
                console.log(items[0]);
            });
    }, []);
    return (
        <Layout sidebar>
            <div className="container">
                <div className="leftBox">
                    <h1>Quy định</h1>
                    <input type="number" name="book" value={rules.book} onChange={handleChange} min="1"/>
                    <input type="number" name="cancel" value={rules.cancel} onChange={handleChange} min="1"/>
                    <input type="number" name="max" value={rules.max} onChange={handleChange} min="1"/>
                    <button type="submit" className="button" name="button" onClick={() => {
                        axios.put(`http://localhost:2000/api/rule/61aeb8a2d82d65187dbf7c6b`, rules);
                        alert("Lưu thành công");
                    }}>Lưu thay đổi</button>
                </div>
                <div className="rightBox">
                    <div className="social">
                        <button className="socialin label">Thời gian chậm nhất đặt vé</button>
                        <button className="socialin label">Thời gian chậm nhất huỷ vé</button>
                        <button className="socialin label">Số lượng vé tối đa được đặt</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}