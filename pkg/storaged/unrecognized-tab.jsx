/*
 * This file is part of Cockpit.
 *
 * Copyright (C) 2016 Red Hat, Inc.
 *
 * Cockpit is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Cockpit is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";
import cockpit from "cockpit";

import { FormatButton } from "./format-dialog.jsx";

const _ = cockpit.gettext;

export class UnrecognizedTab extends React.Component {
    render() {
        return (
            <div>
                <div className="tab-actions">
                    <FormatButton client={this.props.client} block={this.props.block} />
                </div>
                <div className="ct-form-layout">
                    <label className="control-label">{_("Usage")}</label>
                    <div>{this.props.block.IdUsage || "-"}</div>

                    <label className="control-label">{_("Type")}</label>
                    <div>{this.props.block.IdType || "-"}</div>
                </div>
            </div>
        );
    }
}
