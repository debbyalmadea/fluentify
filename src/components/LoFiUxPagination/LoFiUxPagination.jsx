/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const LoFiUxPagination = ({
    variant,
    className,
    rectangleClassName,
    rectangleClassNameOverride,
    hasRectangle = true,
    index = 0,
}) => {
    return (
        <div className={`lo-fi-UX-pagination variant-${variant} ${className}`}>
            {variant === "slide" && (
                <>
                    {[...Array(3)].map((_, i) => (
                        i === index ? (
                            <div key={i} className={`div ${rectangleClassNameOverride}`} />
                        ) : (
                            <div key={i} className="div" />
                        )
                    ))}
                    {/* <div className={`rectangle ${rectangleClassName}`} />
                    <div className={`div ${rectangleClassNameOverride}`} />
                    <div className="div" /> */}
                    <>{hasRectangle && <div className="div" />}</>
                </>
            )}

            {variant === "button" && (
                <div className="wireframe-button">
                    <Button
                        className="button-instance"
                        hierachy="secondary"
                        placeholderFillColor="#7C8B9D"
                        size="large"
                        type="icon-only"
                    />
                    <Button
                        className="instance-node"
                        hierachy="secondary"
                        placeholderFillColor="#7C8B9D"
                        size="large"
                        type="icon-only"
                    />
                </div>
            )}

            {variant === "text" && (
                <>
                    <Button className="button-3" divClassName="button-2" hierachy="secondary" size="medium" type="default" />
                    <div className="pagination">
                        <div className="pagination-base">
                            <div className="text">
                                <div className="text-wrapper">
                                    <div className="text-2" />
                                </div>
                            </div>
                        </div>
                        <div className="pagination-base">
                            <div className="text">
                                <div className="text-wrapper">
                                    <div className="text-2" />
                                </div>
                            </div>
                        </div>
                        <div className="pagination-base">
                            <div className="text-3">...</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text">
                                <div className="text-wrapper">
                                    <div className="text-2" />
                                </div>
                            </div>
                        </div>
                        <div className="pagination-base">
                            <div className="text">
                                <div className="text-wrapper">
                                    <div className="text-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="button-3" divClassName="button-2" hierachy="secondary" size="medium" type="default" />
                </>
            )}

            {variant === "simple" && (
                <>
                    <div className="wireframe-button-wrapper">
                        <div className="wireframe-button">
                            <Button
                                className="button-instance"
                                hierachy="secondary"
                                placeholderFillColor="#7C8B9D"
                                size="large"
                                type="icon-only"
                            />
                        </div>
                    </div>
                    <div className="lo-fi-text-wrapper">
                        <div className="lo-fi-text">
                            <div className="text-4" />
                        </div>
                    </div>
                    <div className="wireframe-button-wrapper">
                        <div className="wireframe-button">
                            <Button
                                className="button-instance"
                                hierachy="secondary"
                                placeholderFillColor="#7C8B9D"
                                size="large"
                                type="icon-only"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

LoFiUxPagination.propTypes = {
    variant: PropTypes.oneOf(["simple", "text", "button", "slide"]),
    hasRectangle: PropTypes.bool,
};