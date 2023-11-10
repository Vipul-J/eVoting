import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import VeereshImg from '../assets/Veeresh.png'
import YonitaImg from '../assets/Yonita.png'
import '../assets/style/core.css'
import Footer from '../components/Footer';
function Dashboard() {
    const [submitButton, setSubmitButton] = useState('SUBMIT');
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const contestantData = [
        { id: 221296, name: 'Veeresh Kuratti', image: VeereshImg },
        { id: 221059, name: 'Yonita Furtado', image: YonitaImg },
    ];

    const handleVote = async () => {
        if (!selectedCandidate || !regNumber) {
            toast.error('Please enter your registration number and select a contestant before submitting your vote.');
            return;
        }

        try {
            const voteSubmissionUrl = 'https://sheet.best/api/sheets/037b2c5c-83c4-4295-ac1e-c2ddc95eb6d0';

            const requestBody = {
                regNumber: regNumber,
                contestant: selectedCandidate,
            };

            const response = await axios.post(voteSubmissionUrl, requestBody);

            if (response.status === 200) {
                toast.success('Vote submitted successfully!');
                setSelectedCandidate('');
                setRegNumber(''); 

            } else {
                toast.error('Sorry, something went wrong with the vote submission.');
            }
        } catch (error) {
            toast.error('Sorry, something went wrong with the vote submission.');
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4 text-decoration-underline">General Secretary E-Voting Portal</h2>
                        <div className="text-center mt-4">
                            <label htmlFor="regNumber">Enter Reg Number  </label>
                            <input
                                type="text"
                                className='ms-4'
                                id="regNumber"
                                onChange={(e) => setRegNumber(e.target.value)}
                                pattern="\d{6}"
                                title="Please enter a 6-digit registration number"
                                maxLength="6"
                                required
                            /><span className="badge bg-danger ms-3">Required</span>
                            {/* <button
                                type="button"
                                onClick={handleVote}
                                disabled={!selectedCandidate || !regNumber}
                            >
                                {`Vote for ${selectedCandidate}`}
                            </button> */}
                        </div>
                        <table className="table table-hover shadow-sm p-3 mb-5 bg-body rounded border mt-4">
                            <thead className='table-info'>
                                <tr>
                                    <th>Contestant Number</th>
                                    <th>Contestant Name</th>
                                    <th>Image</th>
                                    <th>Vote </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contestantData.map((contestant) => (
                                    <tr key={contestant.id}>
                                        <td className='fs-5'>{contestant.id}</td>
                                        <td className='fs-5'>{contestant.name}</td>
                                        <td>
                                            <img
                                                src={contestant.image}
                                                alt={`Image of ${contestant.name}`}
                                                style={{ width: '120px' }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name="selectedCandidate"
                                                value={contestant.name}
                                                checked={selectedCandidate === contestant.name}
                                                onChange={() => setSelectedCandidate(contestant.name)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-center mt-4">
                            <button
                                type="button"
                                className='btn btn-primary text-white fw-bolder'
                                onClick={handleVote}
                                disabled={!selectedCandidate || !regNumber}
                            >
                                {`Vote for ${selectedCandidate}`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
}

export default Dashboard;
