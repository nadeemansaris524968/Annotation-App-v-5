var ListCtrlr = (function () {
    var data = {
        "Major Anatomic Region": [
            {
                name: "Bones",
                Subanatomy: [
                    {
                        "name": "Acromioclavicular Joint",
                        Findings: [
                            {
                                name: "Arthropathy"
                            },
                            {
                                name: "Dislocation"
                            }
                        ]
                    },
                    {
                        "name": "Cervical spine",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            },
                            {
                                name: "Scoliosis"
                            },
                            {
                                name: "Spinal degenerative changes"
                            }
                        ]
                    },
                    {
                        "name": "Clavicle",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            }
                        ]
                    },
                    {
                        "name": "Glenohumeral joint",
                        Findings: [
                            {
                                name: "Arthropathy"
                            },
                            {
                                name: "Dislocation"
                            }
                        ]
                    },
                    {
                        "name": "Humerus",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            }
                        ]
                    },
                    {
                        name: "Lumbar spine",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            },
                            {
                                name: "Scoliosis"
                            },
                            {
                                name: "Spinal degenerative changes"
                            }
                        ]
                    },
                    {
                        name: "Ribs",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            }
                        ]
                    },
                    {
                        name: "Scapula",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            }
                        ]
                    },
                    {
                        name: "Sternum",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            }
                        ]
                    },
                    {
                        name: "Thoracic spine",
                        Findings: [
                            {
                                name: "Fracture"
                            },
                            {
                                name: "Bone lesion"
                            },
                            {
                                name: "Metal bone implant or fixation hardware"
                            },
                            {
                                name: "Scoliosis"
                            },
                            {
                                name: "Spinal degenerative changes"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Device Position",
                Subanatomy: [
                    {
                        name: "NA",
                        Findings: [
                            {
                                name: "Automated implantable cardioverter-defibrillator and lead position"
                            },
                            {
                                name: "Cardiac pacemaker and lead position"
                            },
                            {
                                name: "Central line (multi-lumen) position"
                            },
                            {
                                name: "Central line (single lumen) position"
                            },
                            {
                                name: "Chest tube position"
                            },
                            {
                                name: "Endotracheal tube position"
                            },
                            {
                                name: "Feeding tube position"
                            },
                            {
                                name: "Gastrotomy tube position"
                            },
                            {
                                name: "Mediastinal drains position"
                            },
                            {
                                name: "Nasogastric tube position"
                            },
                            {
                                name: "PICC position"
                            },
                            {
                                name: "Swan-Ganz catheter position"
                            },
                            {
                                name: "Tracheostomy tube position"
                            },
                            {
                                name: "Ventricular shunt catheter position"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Implant/Hardware",
                Subanatomy: [
                    {
                        name: "Axilla",
                        Findings: [
                            {
                                name: "Axillary surgical clips"
                            }
                        ]
                    },
                    {
                        name: "Breast",
                        Findings: [
                            {
                                name: "Breast implant"
                            },
                            {
                                name: "Breast implants"
                            }
                        ]
                    },
                    {
                        name: "NA",
                        Findings: [
                            {
                                name: "Aortic stents"
                            },
                            {
                                name: "Coronary stents"
                            },
                            {
                                name: "Epicardial pacing wires"
                            },
                            {
                                name: "Mediastinal clips"
                            },
                            {
                                name: "Cholecystectomy clips"
                            },
                            {
                                name: "Lung biopsy sutures"
                            },
                            {
                                name: "Gastrointestinal junction surgical clips"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Lungs",
                Subanatomy: [
                    {
                        name: "All lung Zones",
                        Findings: [
                            {
                                name: "Alveolar opacity"
                            },
                            {
                                name: "Atelectasis"
                            },
                            {
                                name: "Findings consistent with granulomatous disease"
                            },
                            {
                                name: "Hyperaeration"
                            },
                            {
                                name: "Hypoaeration"
                            },
                            {
                                name: "Increased reticular markings"
                            },
                            {
                                name: "Increased reticulonodular markings"
                            },
                            {
                                name: "Mass/Nodule"
                            },
                            {
                                name: "Peribronchial cuffing"
                            }
                        ]
                    },
                    {
                        name: "Hila",
                        Findings: [
                            {
                                name: "Enlarged hilum"
                            },
                            {
                                name: "Calcified hilar nodes"
                            }
                        ]
                    },
                    {
                        name: "Lower lung zone",
                        Findings: [
                            {
                                name: "Cyst/Bulla"
                            },
                            {
                                name: "Bronchiectasis"
                            }
                        ]
                    },
                    {
                        name: "Mid lung zone",
                        Findings: [
                            {
                                name: "Cyst/Bulla"
                            },
                            {
                                name: "Bronchiectasis"
                            }
                        ]
                    },
                    {
                        name: "NA",
                        Findings: [
                            {
                                name: "Pneumonectomy"
                            }
                        ]
                    },
                    {
                        name: "Upper lung zone",
                        Findings: [
                            {
                                name: "Cyst/Bulla"
                            },
                            {
                                name: "Bronchiectasis"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Major airways",
                Subanatomy: [
                    {
                        name: "Mainstem bronchus",
                        Findings: [
                            {
                                name: "Tracheal deformity"
                            },
                            {
                                name: "Tracheal displacement"
                            }
                        ]
                    },
                    {
                        name: "Trachea",
                        Findings: [
                            {
                                name: "Bronchial cut-off"
                            },
                            {
                                name: "Endobronchial lesion"
                            },
                            {
                                name: "Mainstem bronchus deformity"
                            },
                            {
                                name: "Mainstem bronchus displacement"
                            },
                            {
                                name: "Tracheal displacement"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Mediastinum",
                Subanatomy: [
                    {
                        name: "Azygous region",
                        Findings: [
                            {
                                name: "Mass/Nodule"
                            }
                        ]
                    },
                    {
                        name: "Cardiac silhouette",
                        Findings: [
                            {
                                name: "Abnormal shape suggesting congenital heart disease"
                            },
                            {
                                name: "Aortic valve calcification"
                            },
                            {
                                name: "Aortic valve prosthesis"
                            },
                            {
                                name: "Azygous region enlargement"
                            },
                            {
                                name: "Enlarged cardiac silhouette"
                            },
                            {
                                name: "Mass/Nodule"
                            },
                            {
                                name: "Mediastinal displacement"
                            },
                            {
                                name: "Mediastinal widening"
                            },
                            {
                                name: "Mitral valve annulus calcification"
                            },
                            {
                                name: "Mitral valve prosthesis"
                            },
                            {
                                name: "Obscured cardiac silhouette"
                            },
                            {
                                name: "Pneumocardium"
                            },
                            {
                                name: "Pneumomediastinum"
                            },
                            {
                                name: "Pneumopericardium"
                            },
                            {
                                name: "Situs inversus"
                            },
                            {
                                name: "Thickened paratracheal stripe"
                            }
                        ]
                    },
                    {
                        name: "Cardiophrenic angle",
                        Findings: [
                            {
                                name: "Pulmonic valve calcification"
                            },
                            {
                                name: "Pulmonic valve prosthesis"
                            }
                        ]
                    },
                    {
                        name: "NA",
                        Findings: [
                            {
                                name: "Tricuspid valve calcification"
                            },
                            {
                                name: "Tricuspid valve prosthesis"
                            },
                            {
                                name: "Enlarged left atrium"
                            },
                            {
                                name: "Enlarged right atrium"
                            },
                            {
                                name: "Enlarged left ventricle"
                            },
                            {
                                name: "Coronary calcifications"
                            },
                            {
                                name: "Left ventricular bulging with calcification"
                            }
                        ]
                    },
                    {
                        name: "Paratracheal region",
                        Findings: [
                            {
                                name: "Left ventricular bulging without calcification"
                            },
                            {
                                name: "Pericardial calcification"
                            }
                        ]
                    },
                    {
                        name: "Paratracheal stripe",
                        Findings: [
                            {
                                name: "Cardiophrenic angle mass"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Other soft tissues",
                Subanatomy: [
                    {
                        name: "Abdomen",
                        Findings: [
                            {
                                name: "Hernia"
                            },
                            {
                                name: "Subdiaphragmatic free air"
                            }
                        ]
                    },
                    {
                        name: "Axilla",
                        Findings: [
                            {
                                name: "Subdiaphragmatic free air"
                            },
                            {
                                name: "Dilated stomach"
                            }
                        ]
                    },
                    {
                        name: "Breast",
                        Findings: [
                            {
                                name: "Abdominal organ position"
                            },
                            {
                                name: "Abdominal organ enlargement"
                            },
                            {
                                name: "Mastectomy"
                            }
                        ]
                    },
                    {
                        name: "Chest wall",
                        Findings: [
                            {
                                name: "Mastectomy"
                            },
                            {
                                name: "Mastectomies"
                            },
                            {
                                name: "Neck subcutaneous emphysema"
                            },
                            {
                                name: "Carotid artery calcification"
                            }
                        ]
                    },
                    {
                        name: "NA",
                        Findings: [
                            {
                                name: "Carotid artery calcification"
                            },
                            {
                                name: "Chest wall subcutaneous emphysema"
                            }
                        ]
                    },
                    {
                        name: "Neck",
                        Findings: [
                            {
                                name: "Chest wall mass"
                            },
                            {
                                name: "Chest wall masses"
                            },
                            {
                                name: "Axillary mass"
                            },
                            {
                                name: "Axillary masses"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pleura",
                Subanatomy: [
                    {
                        name: "Costophrenic angle",
                        Findings: [
                            {
                                name: "Costophrenic angle blunting"
                            }
                        ]
                    },
                    {
                        name: "Hemidiaphragm",
                        Findings: [
                            {
                                name: "Flattening of the hemidiaphragmatic silhouette"
                            },
                            {
                                name: "Obscuration of the diaphragmatic silhouette"
                            }
                        ]
                    },
                    {
                        name: "NA",
                        Findings: [
                            {
                                name: "Hydropneumothoraces"
                            },
                            {
                                name: "Hydropneumothorax"
                            },
                            {
                                name: "Pleural calcification"
                            },
                            {
                                name: "Pleural effusion"
                            },
                            {
                                name: "Pleural mass"
                            },
                            {
                                name: "Pleural masses"
                            },
                            {
                                name: "Pleural thickening"
                            },
                            {
                                name: "Pneumothoraces"
                            },
                            {
                                name: "Pneumothorax"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vasculature",
                Subanatomy: [
                    {
                        name: "Aorta",
                        Findings: [
                            {
                                name: "Pulmonary artery cut-off"
                            },
                            {
                                name: "Pulmonary artery enlargement"
                            },
                            {
                                name: "Vascular redistribution"
                            }
                        ]
                    },
                    {
                        name: "Lower lung zone",
                        Findings: [
                            {
                                name: "Anomalous pulmonary vessel"
                            }
                        ]
                    },
                    {
                        name: "Mid lung zone",
                        Findings: [
                            {
                                name: "Anomalous pulmonary vessel"
                            }
                        ]
                    },
                    {
                        name: "Pulmonary arteries",
                        Findings: [
                            {
                                name: "Anomalous pulmonary vessel"
                            },
                            {
                                name: "Aortic atherosclerosis"
                            }
                        ]
                    },
                    {
                        name: "Pulmonary veins",
                        Findings: [
                            {
                                name: "Aortic dilatation"
                            }
                        ]
                    },
                    {
                        name: "Upper lung zone",
                        Findings: [
                            {
                                name: "Obscuration of the descending thoracic aorta"
                            },
                            {
                                name: "Right-sided aortic arch"
                            },
                            {
                                name: "Aorta/great vessel congenital anomaly"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return {
        getAnatomyList: function () {
            var anatomyList = [];
            data['Major Anatomic Region'].forEach(function (anatomy) {
                anatomyList.push(anatomy);
            });

            return anatomyList;
        },
        getSubanatomyListFor: function (anatomyName) {
            var subanatomyList = [];
            data['Major Anatomic Region'].forEach(function (anatomy) {
                if (anatomyName === anatomy.name) {
                    subanatomyList = anatomy.Subanatomy;
                }
            });

            return subanatomyList;
        },
        getFindingsFor: function (anatomyName, subanatomyName) {
            var findings = [];
            data['Major Anatomic Region'].forEach(function (anatomy) {
                if (anatomyName === anatomy.name) {
                    anatomy.Subanatomy.forEach(function (subanatomy) {
                        if (subanatomyName === subanatomy.name) {
                            findings = subanatomy.Findings;
                        }
                    });
                }
            });

            return findings;
        }
    };
})();
