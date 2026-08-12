import * as clientService from '../services/clientServices.js';
export const getClients = async (req, resp)=>{
    try{
        const client = await clientService.getClients();
        resp.status(200).json(client)
    }catch(err){
        console.log('Error fetching clients:',err);
        resp.status(500).json({message:"Internal Server"})
    }
} 

export const createClient = async (req, resp) => {
  try {
    const clientData = req.body;
    const newClient = await clientService.createClient(clientData);
    resp.status(201).json(newClient);
  } catch (error) {
    console.error('Error creating client:', error);
    resp.status(500).json({ message: 'Internal Server Error' });
  }
 };

 
export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updatedClient = await clientService.updateClient(clientId, clientData);
        if (!updatedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(updatedClient);

    } catch (err) { 
        console.error('Error updating client:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deleted = await clientService.deleteClient(clientId);
        if (!deleted) {
        return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).send();
    } catch (err) { 
        console.error('Error deleting client:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const searchClients = async (req,res)=>{
    try{
        const searchTerm = req.query.q;
        const clients = await clientService.searchClients(searchTerm);
        res.status(200).json(clients)
    } catch(error){
        console.error('Error searching clients:', error);
        res.status(500).json({message:'Internal Server Error'})
    }
};
