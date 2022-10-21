import { Collapse, Form } from "react-bootstrap";
import CategoryNodeProps from "./CategoryNodeProps";

function CategoryNode(props: CategoryNodeProps) {
    return props.Category !== undefined ?
            <>
                <div className="checkbox-container">
                    <Form.Check 
                        type="switch"
                        label={props.Category.title}
                        name={props.Category.title}
                        id={props.Category.id.toString()}
                        key={props.Category.id.toString()}
                        checked={props.Category.selected}
                        onChange={() => props.HandleUpdateCallback(props.Category.id, "check")}
                        />
                    {props.Category.children !== undefined && props.Category.children.some(x => x !== undefined) ? (
                        <button type="button" onClick={() => props.HandleUpdateCallback(props.Category.id, "expand")}>{props.Category.isExpanded ? "-" : "+"}</button>
                        ) : (<></>)}
                </div>
                
                    {props.Category.children !== undefined && props.Category.children.some(x => x !== undefined) ? (
                        <Collapse in={props.Category.isExpanded}>
                             <div id={`collapse-${props.Category.id}`}>
                                {
                                    props.Category.children.map((c) => (<CategoryNode Category={c} HandleUpdateCallback={props.HandleUpdateCallback} />))
                                }
                            </div>
                        </Collapse>
                ) : (<></>)}
            </>
    : <></>
}

CategoryNode.defaultProps = {
    Category: {},
    HandleUpdateCallback: (id, property) => {}
} as CategoryNodeProps;

export default CategoryNode;