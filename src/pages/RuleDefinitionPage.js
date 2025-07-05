import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Paper, Grid
} from '@mui/material';
import axios from 'axios';

const RuleDefinitionPage = () => {
  const [ruleName, setRuleName] = useState('');
  const [ruleDescription, setRuleDescription] = useState('');
  const [examples, setExamples] = useState('');
  const [status, setStatus] = useState('');

  const handleRuleSubmit = async () => {
    try {
      const payload = {
        rule_name: ruleName,
        description: ruleDescription,
        examples: examples.split('\n')  // Split multiline examples into array
      };

      const response = await axios.post('http://localhost:8000/admin/add_rule', payload);
      setStatus('✅ Rule submitted successfully.');
      setRuleName('');
      setRuleDescription('');
      setExamples('');
    } catch (err) {
      setStatus('❌ Failed to submit rule.');
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Paper style={{ padding: 30 }}>
        <Typography variant="h5" gutterBottom>🧠 Define a New Rule</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Rule Name" value={ruleName} onChange={(e) => setRuleName(e.target.value)} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              value={ruleDescription}
              onChange={(e) => setRuleDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Examples (each on new line)"
              multiline
              rows={5}
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" onClick={handleRuleSubmit}>
              ➕ Add Rule
            </Button>
          </Grid>
        </Grid>

        <Typography variant="body1" style={{ marginTop: 20 }}>
          {status}
        </Typography>
      </Paper>
    </Container>
  );
};

export default RuleDefinitionPage;