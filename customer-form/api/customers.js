import dbConnect from '../utils/dbConnect';
import Customer from '../models/Customer';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, email, phone } = req.body;

    try {
      // Check for duplicates based on email or phone
      const existingCustomer = await Customer.findOne({
        $or: [{ email }, { phone }]
      });

      if (existingCustomer) {
        return res.status(400).json({ message: 'Duplicate entry found.' });
      }

      // Create a new customer
      const customer = new Customer({ name, email, phone });
      await customer.save();

      return res.status(201).json({ message: 'Customer data saved successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
