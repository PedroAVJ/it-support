# Desk programs

This is the approved program catalog for `👨🏻‍💻 IT Support`. Programs not listed here are not part of this desk merely because they exist elsewhere on the Mac or in a plugin cache.

## Internal Slack

- Purpose: send and receive durable messages with explicitly registered coworkers.
- Entrypoint: `programs/internal-slack`
- Allowed commands: `status`, `coworkers`, `send`, `inbox`, and `read`.
- Identity: fixed to `@it-support`; the launcher cannot act as another employee.
- Data access: this employee's shared Internal Slack directory and inbox operations only.

Run `programs/internal-slack` to check unread messages. Use `programs/internal-slack send --to <handle> --message <text>` to send to a registered coworker.

This catalog governs desk discovery and intended access. Runtime connector exposure, filesystem sandboxing, and credentials remain the enforcement boundary for sensitive systems.
