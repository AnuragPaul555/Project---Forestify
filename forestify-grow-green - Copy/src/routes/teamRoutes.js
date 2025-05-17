const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Get all team members
router.get('/', teamController.getAllTeamMembers);

// Get team member by ID
router.get('/:id', teamController.getTeamMemberById);

// Create new team member
router.post('/', teamController.createTeamMember);

// Update team member
router.put('/:id', teamController.updateTeamMember);

// Delete team member
router.delete('/:id', teamController.deleteTeamMember);

module.exports = router; 