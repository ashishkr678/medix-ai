import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useLocation } from 'react-router-dom';

const DrugPredictionForm = () => {
    const [symptoms, setSymptoms] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handlePageLeave = () => {
            localStorage.removeItem('symptoms');
            localStorage.removeItem('prediction');
        };
        window.addEventListener('beforeunload', handlePageLeave);

        const savedSymptoms = localStorage.getItem('symptoms');
        const savedPrediction = localStorage.getItem('prediction');

        if (savedSymptoms) setSymptoms(savedSymptoms);
        if (savedPrediction) setPrediction(JSON.parse(savedPrediction));

        return () => {
            window.removeEventListener('beforeunload', handlePageLeave);
        };
    }, []);

    useEffect(() => {
        return () => {
            resetForm();
        };
    }, [location]);

    const resetForm = () => {
        setSymptoms('');
        setPrediction(null);
        setError(null);
        setLoading(false);
        localStorage.removeItem('symptoms');
        localStorage.removeItem('prediction');
    };

    const saveToLocalStorage = (symptoms, prediction) => {
        localStorage.setItem('symptoms', symptoms);
        localStorage.setItem('prediction', JSON.stringify(prediction));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setPrediction(null);
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                symptoms
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setPrediction(response.data);
            saveToLocalStorage(symptoms, response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching prediction. Please try again.');
            setLoading(false);
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text('Drug Prediction Report', 105, 20, null, null, 'center');

        doc.setFontSize(16);
        doc.text(`Symptoms: ${symptoms}`, 10, 40);

        if (prediction) {
            const tableData = [
                ['Field', 'Details'],
                ['Predicted Disease', prediction.predicted_disease],
                ['Description', prediction.description]
            ];

            tableData.push(['Diet', prediction.diet.join(', ')]);
            tableData.push(['Medications', prediction.medications.join(', ')]);
            tableData.push(['Precautions', prediction.precautions.join(', ')]);
            tableData.push(['Workout', prediction.workout.join(', ')]);

            doc.autoTable({
                startY: 50,
                headStyles: { fillColor: [22, 160, 133] },
                margin: { left: 10, right: 10 },
                body: tableData.map(([field, details]) => [field, details]),
                styles: { fontSize: 12 }
            });

            doc.setFontSize(14);
            doc.text('Thank you for Visiting MedixAI', 105, doc.internal.pageSize.height - 20, null, null, 'center');
        }

        doc.save('DrugPredictionAnalysis.pdf');
    };

    return (
        <div className="py-20 max-w-3xl mx-auto px-4 md:px-0">
            <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded p-8">
                <label className="block mb-2 text-sm font-medium text-gray-700">Enter Symptoms:</label>
                <input
                    type="text"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="itching, skin_rash, etc."
                    className="border p-3 w-full mb-6 rounded-md text-lg"
                    required
                />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm"
                    >
                        {loading ? 'Loading...' : 'Predict'}
                    </button>
                </div>
            </form>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {prediction && (
                <div className="bg-white shadow-md rounded p-8">
                    <h2 className="text-lg font-bold mb-6 text-center text-gray-800">Prediction Result</h2>
                    <table className="table-auto w-full border-collapse border text-left">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 bg-gray-100">Field</th>
                                <th className="border px-4 py-2 bg-gray-100">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Predicted Disease</td>
                                <td className="border px-4 py-2">{prediction.predicted_disease}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Description</td>
                                <td className="border px-4 py-2">{prediction.description}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Diet</td>
                                <td className="border px-4 py-2">
                                    {Array.isArray(prediction.diet) ? (
                                        prediction.diet.map((item, idx) => <p key={idx}>{item}</p>)
                                    ) : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Medications</td>
                                <td className="border px-4 py-2">
                                    {Array.isArray(prediction.medications) ? (
                                        prediction.medications.map((item, idx) => <p key={idx}>{item}</p>)
                                    ) : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Precautions</td>
                                <td className="border px-4 py-2">
                                    {Array.isArray(prediction.precautions) ? (
                                        prediction.precautions.map((item, idx) => <p key={idx}>{item}</p>)
                                    ) : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Workout</td>
                                <td className="border px-4 py-2">
                                    {Array.isArray(prediction.workout) ? (
                                        prediction.workout.map((item, idx) => <p key={idx}>{item}</p>)
                                    ) : 'N/A'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={downloadPDF}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DrugPredictionForm;
